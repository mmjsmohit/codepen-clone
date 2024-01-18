import React from "react";
import $ from "jquery";
function Console() {
  var realConsoleLog = console.log;
  console.log = function () {
    var message = [].join.call(arguments, " ");
    $(".output").text(message);
    realConsoleLog.apply(console, arguments);
  };

  return (
    <div className="console">
      <div className="output"></div>
    </div>
  );
}

export default Console;
