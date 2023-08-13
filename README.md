# Manlody

사용기술 : firebase react-router-dom styled-components axios react-query @reduxjs/toolkit react-redux shortid Typescript antd @ant-design/icons react-slick @types/react-slick slick-carousel react-icons/ai spotify-web-api-node react-spotify-web-playback

<img src="https://capsule-render.vercel.app/api?type=wave&color=auto&height=300&section=header&text=🎶MANLODY🎵&fontSize=60" />

### 실행법
> 1. `yarn start`로 클라이언트 실행

# MANLODY 🎵🎶

## 🖥️ 프로젝트 개요

- React.js TypeScript
- Spotify Web API & Web Playback SDK를 사용하여 다양한 앨범 & 아티스트의 곡 등을 요청하여 음악을 플레이하는 페이지 구현

<br />

### 📍 사이트 주소

<a href="https://gong-gong-play.vercel.app/">MANLODY</a>



### 🕰️ 개발 기간

2023.08.07 ~ 2023.08.14

<br />

### 🖼 와이어프레임

<details>
	
<summary><a href="https://www.figma.com/community/file/1264539931329446342">Figma</a> | 펼칠 시 스크린샷</summary>
<br />

![manlody-wireframe](https://github.com/CTDKSKM/nbc_manlody/assets/109304556/89f38527-ef63-4dcf-8780-a1fb59085413)

</details>

<br />

### 🏷 폴더 구조

<details>
<summary>펼칠 시 파일 상세 구조</summary>
  
```
📦src
 ┣ 📂api
 ┃ ┣ 📜accesstoken.ts
 ┃ ┣ 📜comments.ts
 ┃ ┣ 📜likes.ts
 ┃ ┗ 📜spotify.ts
 ┣ 📂components
 ┃ ┣ 📂Dashboard
 ┃ ┃ ┣ 📜Dashboard.tsx
 ┃ ┃ ┣ 📜Player.tsx
 ┃ ┃ ┗ 📜TrackSearchResult.tsx
 ┃ ┣ 📂detail-album
 ┃ ┃ ┗ 📂review
 ┃ ┃ ┃ ┣ 📜AlbumReview.tsx
 ┃ ┃ ┃ ┣ 📜CreatedTime.tsx
 ┃ ┃ ┃ ┣ 📜Review.tsx
 ┃ ┃ ┃ ┗ 📜ReviewBox.tsx
 ┃ ┣ 📂GetAccessToken
 ┃ ┃ ┗ 📜GetAccessToken.tsx
 ┃ ┣ 📜Error.tsx
 ┃ ┣ 📜FormTag.tsx
 ┃ ┣ 📜Header.tsx
 ┃ ┣ 📜Loading.tsx
 ┃ ┣ 📜NavBar.tsx
 ┃ ┣ 📜NavLiFavoriteSong.tsx
 ┃ ┣ 📜Profile.tsx
 ┃ ┣ 📜PuaseSlider.tsx
 ┃ ┗ 📜Slider.tsx
 ┣ 📂hooks
 ┃ ┣ 📜useLikes.tsx
 ┃ ┣ 📜useReview.tsx
 ┃ ┗ 📜useUser.tsx
 ┣ 📂pages
 ┃ ┣ 📜DetailAlbum.tsx
 ┃ ┣ 📜FavoriteSongs.tsx
 ┃ ┣ 📜Home.tsx
 ┃ ┣ 📜index.ts
 ┃ ┣ 📜PlayList.tsx
 ┃ ┗ 📜SocialLogin.tsx
 ┣ 📂redux
 ┃ ┣ 📂config
 ┃ ┃ ┗ 📜configStore.tsx
 ┃ ┗ 📂modules
 ┃ ┃ ┣ 📜playUris.ts
 ┃ ┃ ┗ 📜rgb.ts
 ┣ 📂shared
 ┃ ┣ 📜Layout.tsx
 ┃ ┗ 📜Router.tsx
 ┣ 📂types
 ┃ ┣ 📜react-color-extractor.d.ts
 ┃ ┗ 📜react-spotify-web-playback.d.ts
 ┣ 📜App.css
 ┣ 📜App.test.tsx
 ┣ 📜App.tsx
 ┣ 📜firebase.tsx
 ┣ 📜GlobalStyle.tsx
 ┣ 📜index.css
 ┣ 📜index.tsx
 ┣ 📜react-app-env.d.ts
 ┣ 📜reportWebVitals.ts
 ┗ 📜setupTests.ts
```
</details>

<br />

## 🧑‍🤝‍🧑 팀원 소개

- 팀명 : 파이브가이즈
- 팀원 및 담당 구현 기능

| 역할 | 이름   | 담당 구현 기능                                 | GitHub                                                                     |
| ---- | ------ | ---------------------------------------------- | --------------------------------------------------------------------------- |
| 팀장 | 서경모 | 지도 API, express 서버, 컴포넌트간 데이터 연결 | <a href="https://github.com/kimhwanhoon">https://github.com/kimhwanhoon</a> |
| 팀원 | 김우리 | 날씨API, 유튜브 API                            | <a href="https://github.com/wooriki">https://github.com/wooriki</a>         |
| 팀원 | 이동준 | 공공API 데이터 페이지네이션                    | <a href="https://github.com/xoxojw">https://github.com/xoxojw</a>           |
| 팀원 | 조진명 | 날씨API, 상세 페이지, 댓글 기능, 검색 기능     | <a href="https://github.com/pigrok">https://github.com/pigrok</a>           |
| 팀원 | 황대성 | 공공API 데이터 검색 및 필터 기능               | <a href="https://github.com/choisua98">https://github.com/choisua98</a>     |

<br />

## 📌 주요 기능

### Sopotify Web Api

- 
- 

### 공공데이터API

- `react query`, `axios` 활용하여 서울시 공공API 데이터 GET 요청한다
- 검색창 필터링으로 공공데이터 필터기능을 구현한다
- 필터링 된 API 데이터를 `pagination` 기능으로 `painting`
  
<br />
<br />

### 🎬 페이지 스크린샷

#### 1. 로그인 화면

![loginPage](https://github.com/CTDKSKM/nbc_manlody/assets/105066603/bb8a4bf9-413a-42e1-b213-fac4b0932711)

<br />

#### 2. 메인화면

![mainPage](https://github.com/CTDKSKM/nbc_manlody/assets/105066603/eef458b9-d740-484b-9269-649991d276db)

<br />

#### 3. 검색기능 구현

![search](https://github.com/CTDKSKM/nbc_manlody/assets/105066603/b102add3-054c-4937-9fdd-dbe1edb7da69)

<br />

#### 4. 앨범 디테일 화면

![albumPage](https://github.com/CTDKSKM/nbc_manlody/assets/105066603/6edefa67-0141-470b-91e3-367cfd95babf)

<br />

#### 4. 앨범 디테일 화면 - 플레이리스트 추가 기능

![addPlayList](https://github.com/CTDKSKM/nbc_manlody/assets/105066603/83936bcc-38fb-4486-a5f2-17423bce1755)

<br />

#### 5. 앨범 디테일 화면 - 플레잉나우 추가 기능

![playingNow](https://github.com/CTDKSKM/nbc_manlody/assets/105066603/21f04f24-6245-4ffe-86c1-ec92c17fe694)

<br />

#### 6. 반응형 구현

![small](https://github.com/kimhwanhoon/20230724_team_project/assets/109304556/d6907671-c743-49dd-8bca-b504238a363f)

<br />

## ⚙️ 기술 스택

- React.js
<div align=“center”>
<img src="https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=React&logoColor=black">

</div>

### ⚙️ 사용한 라이브러리

- styled-components
- react-router-dom
- react-redux
- redux-devtools-extension
- react-query
- react-query-devtools
- axios
- react-spotify-web-playback
- react-bootstrap
- slick-carousel
- react-color-extractor

<div align=“center”>
<img src="https://img.shields.io/badge/styled components-e62744?style=for-the-badge&logo=styledcomponents&logoColor=white"> <img src="https://img.shields.io/badge/React Router DOM-ed7a40?style=for-the-badge&logo=reactrouter&logoColor=white"> <img src="https://img.shields.io/badge/Redux Toolkit-e0a538?style=for-the-badge&logo=redux&logoColor=white">
	
<img src="https://img.shields.io/badge/React Query-32b3bf?style=for-the-badge&logo=reactquery&logoColor=white"> <img src="https://img.shields.io/badge/React Naver Maps-03C75A?style=for-the-badge&logo=naver&logoColor=white"> <img src="https://img.shields.io/badge/Axios-3261bf?style=for-the-badge&logo=axios&logoColor=white"> <img src="https://img.shields.io/badge/Express-4a32bf?style=for-the-badge&logo=express&logoColor=white">
</div>

### ⚙️ 버전 관리 시스템

- Git/Github
<div align=“center”>
 <img src="https://img.shields.io/badge/git-7f8c8f?style=for-the-badge&logo=git&logoColor=white">
 <img src="https://img.shields.io/badge/github-595f61?style=for-the-badge&logo=github&logoColor=white">
 <img src="https://img.shields.io/badge/sourcetree-373c3d?style=for-the-badge&logo=sourcetree&logoColor=white">
</div>

### ⚙️ 협업툴

- Visual Studio
- Slack
- Figma
<div align=“center”>
 <img src="https://img.shields.io/badge/visual studio code-cf72ae?style=for-the-badge&logo=visualstudiocode&logoColor=white">
 <img src="https://img.shields.io/badge/slack-ad498a?style=for-the-badge&logo=slack&logoColor=white">
 <img src="https://img.shields.io/badge/figma-822f65?style=for-the-badge&logo=slack&logoColor=white">
</div>
