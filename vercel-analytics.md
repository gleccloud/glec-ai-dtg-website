# Vercel Analytics Setup Guide

## ✅ Analytics 설치 완료

모든 HTML 파일에 Vercel Analytics 스크립트가 추가되었습니다:
- index.html (영어)
- index-ko.html (한국어) 
- index-zh.html (중국어)

## 📊 Analytics 대시보드 접속

1. Vercel 대시보드 접속: https://vercel.com/dashboard
2. 프로젝트 선택: `ai-dtg-website`
3. Analytics 탭 클릭

## 📈 추적되는 메트릭

### Web Analytics
- 페이지뷰 (PV)
- 고유 방문자 (UV)
- 평균 체류 시간
- 이탈률
- 상위 페이지
- 트래픽 소스
- 디바이스 타입
- 브라우저 정보
- 지역별 방문자

### Real User Monitoring (RUM)
- Core Web Vitals
  - LCP (Largest Contentful Paint)
  - FID (First Input Delay)
  - CLS (Cumulative Layout Shift)
- 페이지 로드 시간
- Time to First Byte (TTFB)

## 🎯 커스텀 이벤트 추가 (선택사항)

필요시 커스텀 이벤트 추적 코드 추가:

```javascript
// 버튼 클릭 추적
window.va?.track('button_click', {
  button_name: 'cta_hero',
  page: 'home'
});

// 폼 제출 추적
window.va?.track('form_submit', {
  form_name: 'contact',
  success: true
});
```

## 🔍 데이터 필터링

Analytics 대시보드에서 사용 가능한 필터:
- 기간 선택 (24시간, 7일, 30일, 커스텀)
- 페이지별 필터
- 디바이스별 필터
- 국가/지역별 필터

## 📱 모바일 앱

Vercel 모바일 앱에서도 Analytics 확인 가능:
- iOS: App Store에서 "Vercel" 검색
- Android: Google Play에서 "Vercel" 검색

## 💡 활용 팁

1. **A/B 테스트**: 다른 버전의 페이지 성능 비교
2. **성능 모니터링**: Core Web Vitals 지속적 확인
3. **트래픽 분석**: 마케팅 캠페인 효과 측정
4. **사용자 행동**: 이탈률 높은 페이지 개선

## 🚀 다음 단계

1. 며칠 간 데이터 수집 대기
2. Analytics 대시보드에서 인사이트 확인
3. 데이터 기반 개선 사항 도출
4. 필요시 커스텀 이벤트 추가

## 📞 지원

- Vercel 문서: https://vercel.com/docs/analytics
- 지원 요청: https://vercel.com/support