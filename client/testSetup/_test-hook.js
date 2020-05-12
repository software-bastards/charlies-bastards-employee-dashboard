import React from "react";
import { shallow, mount } from "enzyme";

export default function testHook(runHook, flushEffects = true) {
  function HookWrapper() {
    const output = runHook();

    return <span output={output} />;
  }

  const wrapperFunc = flushEffects ? mount : shallow;
  const wrapper = wrapperFunc(<HookWrapper />);

  return wrapper.find("span").props().output;
}
