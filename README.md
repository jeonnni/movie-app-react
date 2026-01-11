# ⚡ Crypto Converter (React)
**React**와 **Coinpaprika API**를 활용하여 구현한 실시간 암호화폐 환율 계산기 프로젝트입니다. 
실시간으로 변동되는 100위권 코인의 시세를 반영하며, 달러(USD) 입력 시 보유 가능한 코인 수량을 즉시 계산해주는 기능을 제공합니다. 힙하고 현대적인 UI와 사용자 경험을 고려한 로딩 처리를 적용했습니다.
힙하고 현대적인 UI와 사용자 경험을 고려한 로딩 처리를 적용했습니다.

---

## Features

* ** 실시간 코인 데이터 연동:** Coinpaprika API를 통한 상위 100위 암호화폐 리스트 및 시세 반영
* ** 실시간 환율 계산:** USD 입력 시 선택된 코인으로 즉시 변환 (양방향 상태 연동)
* ** UX 로딩 핸들링:** 데이터 로딩 중 불필요한 0 노출 방지 및 스켈레톤 스타일의 로딩 메시지 적용
* ** Glassmorphism 디자인:** 배경 블러 효과와 반투명 컨테이너를 활용한 트렌디한 UI
* ** Font Pairing:** 영문 `Space Grotesk`와 국문 `Noto Sans KR` 조합으로 가독성 극대화

## Tech Stack

* **React Hooks (useState, useEffect):** API 데이터 fetch 관리 및 실시간 계산 로직 구현
* **API Interface:** Coinpaprika API (JSON 데이터 파싱)
* **CSS Modules:** 컴포넌트 기반 스타일링으로 클래스 중복 방지
* **Deployment:** GitHub Pages를 이용한 정적 웹 배포\

## Learning Points

* **Asynchronous Data Fetching:** `fetch`와 `useEffect`를 활용하여 외부 API 데이터를 가져오는 흐름 이해
* **Conditional Rendering:** 로딩 상태(`loading`)에 따른 조건부 렌더링 적용
* **Logic Optimization:** 입력값과 선택값의 유효성을 검사하여 정확한 결과 도출

## 📷 Preview
<img width="1920" height="927" alt="스크린샷 2026-01-12 오전 5 36 24" src="https://github.com/user-attachments/assets/fcc87499-1d89-4803-93a1-cd64afd1bea6" />
<img width="1920" height="927" alt="스크린샷 2026-01-12 오전 5 36 33" src="https://github.com/user-attachments/assets/a759ebda-91b5-4469-a506-8577a1544cf5" />
<img width="1920" height="927" alt="스크린샷 2026-01-12 오전 5 36 39" src="https://github.com/user-attachments/assets/48b44d9c-96a7-48d5-b394-c637c974d24e" />
<img width="1920" height="927" alt="스크린샷 2026-01-12 오전 5 36 48" src="https://github.com/user-attachments/assets/89fea89c-8204-4c22-b5a0-0686b4a967a0" />

