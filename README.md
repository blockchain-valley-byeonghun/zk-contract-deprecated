# zk feedback contract version2

# todo

- [x] version 2 틀 만들기
- [ ] 다른 호환되는 컨트랙트 배포 할 수 있는 환경 조성
  - semaphore, sbt contract
  - 테스트 코드가 실행될 때 필요한 모든 셋업이 되는 구조..?
- [ ] 컨트랙트 고도화
  - accessControl 분리
- [ ] 테스트 코드 작성
  - deploy test 만 가능한 구조 생성하였음
  - 나중에는 semaphore, sbt contract를 배포하고, 그 address 값들을 feedback 컨트랙트 인자값에 넣어줘야함

---

## 1. installation
- node v16.17.1
- npm 8.15.0
```shell
npm install
```


## 2. environment variables
- `$ touch .env`
- 또는 rename `.env.example` to `.env`
```bash
ALCHEMY_MUMBAI_API_KEY=
ALCHEMY_SEPOLIA_API_KEY=
PRIVATE_KEY=
```

## 3. deploying contract
- `scripts/` 폴더에 있는 파일 실행
- 로컬에 배포 후 테스트 하는 방법
  - `$ npx hardhat node` 
  - `$ npx hardhat run scripts/deploy.ts`
```shell
# sepolia bscMainnet bscTestnet
npx hardhat run scripts/deploy.ts --network mumbai
```
