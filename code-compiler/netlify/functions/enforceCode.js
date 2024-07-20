exports.handler = async function(event, context) {
    const { code, language, input } = JSON.parse(event.body);
  
    return {
      statusCode: 200,
      body: JSON.stringify({ output: "Result of the code compilation" })
    };
  };
  