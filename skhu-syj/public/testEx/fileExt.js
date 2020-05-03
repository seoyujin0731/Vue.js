
/**
 * 파일명에서 확장자명 추출
 * @param filename   파일명
 * @returns _fileExt 확장자명
 */
function getExtensionOfFilename(filename) {
 
    var _fileLen = filename.length;
 
    /** 
     * lastIndexOf('.') 
     * 뒤에서부터 '.'의 위치를 찾기위한 함수
     * 검색 문자의 위치를 반환한다.
     * 파일 이름에 '.'이 포함되는 경우가 있기 때문에 lastIndexOf() 사용
     */
    var _lastDot = filename.lastIndexOf('.');
 
    // 확장자 명만 추출한 후 소문자로 변경 ( toLowerCase() 안쓰면 소문자 변경 없이 추출)
    //substring 말고 slice()를 사용해도 된다 -> slice는 음수 사용 가능
    var _fileExt = filename.substring(_lastDot, _fileLen).toLowerCase();
    return _fileExt;
}
 

let filename = "java_script.js"
let filename2 = "java.t xt"
let filename3 = "hello.html"

console.log(getExtensionOfFilename(filename));
console.log(getExtensionOfFilename(filename2));
console.log(getExtensionOfFilename(filename3));

