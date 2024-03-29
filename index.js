describe("shout(string)", function () {
    it("receives one argument and returns it in all caps", function () {
      expect(shout("hello")).toEqual("HELLO");
    });
  }); 
  function shout(string) {
    // todo
  } 
  function shout(string) {
    return string;
  } 
  "Hello!".toUpperCase(); // 'HELLO!' 
  function shout(string) {
    return string.toUpperCase();
  } 
  describe("whisper(string)", function () { 
    it("recieves one argument and returns it in all lower case", function () { 
    expect(whisper("HELLO")).toEqual("Hello"); 
    }); 
}); 
function whisper(string) { 
} 
function whisper(string) { 
    return string;
} 
"HELLO!".toLowerCase(); 
function whisper(string) { 
    return string.toLowerCase()
} 
function logShout(string) {
    console.log(string.toUpperCase());
  }
   module.exports = { logShout }; 
   function logWhisper(string) {
    console.log(string.toLowerCase());
  }
   module.exports = { logWhisper }; 
   function sayHiToHeadphonedRoommate(string) {
    if (string === string.toLowerCase()) {
      return "I can't hear you!";
    } else if (string === string.toUpperCase()) {
      return "YES INDEED!";
    } else if (string === "Let's have dinner together!") {
      return "I would love to!";
    }
  }