#!/usr/bin/env node
const program = require("commander");

program
  .helpOption("-h, --help", "read more information")
  .option("--base64-hex <string>", "base64 to hex")
  .option("--base64-ascii <string>", "base64 to ascii")
  .option("--base64-utf <string>", "base64 to utf-8")
  .option("--hex-base64 <string>", "hex to base64")
  .option("--hex-ascii <string>", "hex to ascii")
  .option("--hex-utf <string>", "hex to utf-8")
  .option("--ascii-base64 <string>", "ascii to base64")
  .option("--ascii-hex <string>", "ascii to hex")
  .option("--ascii-utf <string>", "ascii to utf-8")
  .option("--utf-base64 <string>", "utf-8 to base64")
  .option("--utf-hex <string>", "utf-8 to hex")
  .option("--utf-ascii <string>", "utf-8 to ascii");

program.parse(process.argv);
var myArgs = process.argv
  .slice(2)
  .join(" ")
  .toString();

//base64 converter
if (program.base64Hex)
  console.log(Buffer.from(myArgs, "base64").toString("hex"));
if (program.base64Ascii)
  console.log(Buffer.from(myArgs, "base64").toString("ascii"));
if (program.base64Utf)
  console.log(Buffer.from(myArgs, "base64").toString("utf-8"));

//hex converter
if (program.hexBase64)
  console.log(Buffer.from(myArgs, "hex").toString("base64"));
if (program.hexUtf) console.log(Buffer.from(myArgs, "hex").toString("utf-8"));
if (program.hexAscii) console.log(Buffer.from(myArgs, "hex").toString("ascii"));

//ascii converter
if (program.asciiBase64)
  console.log(Buffer.from(myArgs, "ascii").toString("base64"));
if (program.asciiHex) console.log(Buffer.from(myArgs, "ascii").toString("hex"));
if (program.asciiUtf)
  console.log(Buffer.from(myArgs, "ascii").toString("utf-8"));

//utf converter
if (program.utfBase64)
  console.log(Buffer.from(myArgs, "utf-8").toString("base64"));
if (program.utfHex) console.log(Buffer.from(myArgs, "utf-8").toString("hex"));
if (program.utfAscii)
  console.log(Buffer.from(myArgs, "utf-8").toString("ascii"));
