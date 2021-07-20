### Summary
  <pre>
    관찰자패턴
    관찰자 패턴은 상태 변화가 일어날 때 관찰자에게 알릴 수 있는 객체를 정의 하는것
    다른 OOP프로그래밍에서 관찰자패턴은 인터페이스와 구현된 클래스들 계층구조가필요

    Node.js에서는 이미 코어에 내장되어있는데
    그것이바로 EventEmitter 
  </pre>

  ### Difference
  <pre>
    콜백 패턴은 일반적으로 그 결과를 하나의 Listener인 콜백에만 전달
    관찰자 패턴은 Subject 가 실제로 여러 Observer 들에게 전달
  </pre>

  ### Essentila Method
  <pre>
    on(event, listener) : 
       주어진 이벤트 유형에 대해 새로운 listener을 등록

    once(event, listener) : 
       첫 이벤트가 전달된 후 제거되는 새로운 listener 등록

    emit(event, [arg1],[...]) : 
      새 이벤트를 생성하고 listener에게   전달할 추가적인 인자들을 지원

    removeListener(event,listener) : 지정된 이벤트 유형에 대한 listener를 제거합니다
  </pre>

