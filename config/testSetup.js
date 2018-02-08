process.env.NODE_ENV = 'test';

import sinon from 'sinon';
import expect from 'expect';
import enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import hook from 'css-modules-require-hook';
import sass from 'node-sass';

enzyme.configure({ adapter: new Adapter() });

hook({
  extensions: [ '.scss', '.css' ],
  generateScopedName: '[local]__[hash:base64:10]',
  preprocessCss: ( data, file ) => sass.renderSync({ file }).css
});

//add images extensions right comprehension to mocha tests
import fs from 'fs';
const exts = ['.svg', '.gif', '.png'];
exts.forEach(extension => {
  require.extensions[extension] = (module, filename) => {
    module.exports = fs.readFileSync(filename, 'utf8');
  };
});

global.sinon = sinon;
global.expect = expect;

global.navigator = {
    userAgent: 'node.js'
};