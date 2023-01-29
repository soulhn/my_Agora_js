//컨텐이너 전체
const formContainer = document.querySelector(".form__container");
// 폼 으로 입력 받는
const formInputTitle = document.querySelector(".form__input--name>input");
const formInputName = document.querySelector(".form__input--name>input");
const formTextbox = document.querySelector(".form__textbox>textarea");

// formSubmitAction 함수 정의
function formSubmitAction(event) {
  event.preventDefault(); //기본 이벤트의 동작을 막는다. 브라우저는 폼을 서버로 전송합니다. 새로고침
  console.log("출력");
  const inputTitleValue = formInputTitle.value;
  const formInputNameValue = formInputName.value;
  const formTextboxValue = formTextbox.value;
  //더하는 데이터, 기존 데이터 포맷과 맞춰서 입력
  const addAnswer = {
    id: agoraStatesDiscussions.length + 1,
    createdAt: new Date().toISOString(),
    title: inputTitleValue,
    url: "https://github.com/soulhn",
    author: formInputNameValue,
    answer: null,
    bodyHTML: formTextboxValue,
    avatarUrl: "https://avatars.githubusercontent.com/u/88018456?s=96&v=4",
  };
  //기존 요소 맨앞에 추가
  agoraStatesDiscussions.unshift(addAnswer);
  ul.prepend(convertToDiscussion(addAnswer));
  render(ul);

  //로컬 스토리지 저장 영역
  const cdtSaveData = localStorage.getItem("agoraData");
  if (cdtSaveData !== null) {
    //로컬 스토리지 이미 차있다면
    const parseCdtSaveData = JSON.parse(cdtSaveData);
    parseCdtSaveData.unshift(addAnswer);
    localStorage.setItem("agoraData", JSON.stringify(parseCdtSaveData));
  } else {
    //로컬 스토리지가 비었다면
    const setDataArr = JSON.stringify([addAnswer]);
    localStorage.setItem("agoraData", setDataArr);
  }
}

formContainer.addEventListener("submit", formSubmitAction); // 제출 이벤트 발생 시
