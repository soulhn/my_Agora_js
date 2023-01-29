# fe-sprint-my-agora-states

### 튜토리얼 1

1. Discussion 컴포넌트
   - [x] 모든 요소에 border-box를 적용합니다.
   - [x] `<li>` 요소의 기본 스타일인 점을 보이지 않게 합니다.
   - [x] Discussion 컴포넌트 전체의 폭을 540px로 만드세요.
2. 왼쪽 아바타
   - [x] 아바타 사진을 인스타그램 프로필 사진처럼 동그랗게 표현하세요.
   - [x] 아바타 사진의 너비를 48px로 설정하세요.
   - [x] 아바타 사진이 Discussion 컴포넌트 높이의 중간에 오도록 정렬합니다.
3. 중간 Discussion 컨텐츠
   - [x] Discussion 제목과 저자, 생성일간에 간격을 충분히 줍니다.
   - [x] 저자, 생성일을 함께 작성하고, 오른쪽 정렬하여 오른쪽에 붙입니다.
4. 오른쪽 체크 표시
   - [x] 체크 표시가 Discussion 컴포넌트 높이의 중간에 오도록 정렬합니다.

### 튜토리얼 2

1. - [x] agoraStatesDiscussions 배열의 모든 디스커션을 화면에 렌더링합니다.

### Bare Minimum Requirement Self Checklist

스스로 구현 완료한 부분까지 체크하여 제출합니다.

- [x] 디스커션 나열 기능
  - [x] `script.js`를 수정하여 `agoraStatesDiscussions` 배열의 데이터를 나열할 수 있게 구현합니다.
- [ ] CSS
  - [x] 아고라 스테이츠 질문 리스트가 중앙으로 와야 합니다.
  - [ ] `style.css`를 수정하여 멋지고 아름답게 나만의 아고라 스테이츠를 꾸밉니다.
  - [ ] [colorhunt](https://colorhunt.co/palettes/popular), [dribbble](https://dribbble.com/)에서 적절한 색 조합, 디자인을 참고합니다.
- [x] 디스커션 추가 기능
  - [x] `script.js`를 수정하여 디스커션 추가 기능을 구현합니다.
  - [x] `section.form__container` 요소에 새로운 아고라 스테이츠 질문을 추가할 수 있는 입력 폼을 제작합니다. 형식은 자유입니다.
  - [x] 아이디, 본문을 입력하고 버튼을 누르면 실제 화면에 디스커션이 추가되어야 합니다.
  - [x] `agoraStatesDiscussions` 배열에 추가한 데이터가 실제 쌓여야 합니다.

### Advanced Challenge Self Checklist

스스로 구현 완료한 부분까지 체크하여 제출합니다.

- [ ] 현지 시간 적용
  - [ ] 샘플 시간을 잘 변형하여, 현지 시간에 맞게 표현합니다. (ex. 오전 10:02:17)
- [ ] 페이지네이션 기능
  - [ ] 페이지네이션에 대해서 스스로 학습합니다.
  - [ ] 한 페이지에 10개씩 디스커션이 보여야 합니다.
  - [ ] 다음 페이지로 넘어갈 수 있어야 합니다.
  - [ ] 이전 페이지로 돌아올 수 있어야 합니다.
  - [ ] 다음 페이지가 없거나, 이전 페이지가 없는 경우 페이지를 유지해야 합니다.
- [x] 디스커션 유지 기능
  - [x] LocalStorage에 대해서 스스로 학습하고, 새롭게 추가하는 Discussion이 페이지를 새로고침해도 유지되도록 제작합니다.
