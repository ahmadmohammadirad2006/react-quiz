function NextButton({ dispatch, index, numQuestions }) {
  const isLastQuestion = index === numQuestions - 1;

  function handleClick() {
    if (isLastQuestion) {
      dispatch({ type: "finish" });
    } else {
      dispatch({ type: "nextQuestion" });
    }
  }

  return (
    <button className="btn btn-ui" onClick={handleClick}>
      {isLastQuestion ? "Finish" : "Next"}
    </button>
  );
}

export default NextButton;
