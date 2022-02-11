function solve(text) {
  let index = text.lastIndexOf("\\");
  let fileName = text.substring(index + 1).split(".");
  let extensions = fileName.pop();
  fileName = fileName.join(".");

  console.log(`File name: ${fileName}`);
  console.log(`File extension: ${extensions}`);
}
solve("C:\\Internal\\training-internal\\Template.bak.rak.pptx");
