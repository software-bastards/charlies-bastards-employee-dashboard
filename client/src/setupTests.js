// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";
import "mutationobserver-shim";
<<<<<<< HEAD
import Adapter from "enzyme-adapter-react-16";

Enzyme.configure({ adapter: new Adapter() });
import React from "react";
import Enzyme, { shallow, render, mount } from "enzyme";

//Enzyme functions can be used in all test files without manual imports
global.shallow = shallow;
global.render = render;
global.mount = mount;
=======
import React from "react";
React.useLayoutEffect = React.useEffect;
>>>>>>> development
