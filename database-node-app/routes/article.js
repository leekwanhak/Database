//article.js 라우터 파일의 기본주소는
//app.js에서 참조시 http://localhost:3000/article 기본주소가 설정되게
//처리합니다.
const express = require("express");
const router = express.Router();
const moment = require("moment"); // moment 라이브러리 가져오기
const db = require("../models"); // 데이터베이스 모델 가져오기

//게시글 전체목록조회 웹페이지 요청과 응답처리 라우팅메소드
//호출주소: http://localhost:3000/article/list
//호출방식: Get
//응답결과: 전체 게시글 목록이 포함된 웹페이지 반환
router.get("/list", async (req, res) => {
  //전체 게시글 목록 조회하기
  const students = await db.Students.findAll();

  res.render("article/list.ejs", { students });
});

//신규 게시글 등록 웹페이지 요청과 응답처리 라우팅메소드
//호출주소: http://localhost:3000/article/create
router.get("/create", async (req, res) => {
  res.render("article/create.ejs");
});

//신규 게시글 입력정보 등록처리 요청과 응답처리 라우팅메소드
//호출주소: http://localhost:3000/article/create
router.post("/create", async (req, res) => {
  //Step1: 신규 게시글 등록폼에서 사용자가 입력/선택한 값을 추출하자.
  const name = req.body.name;
  const student_id = req.body.student_id;
  const gender = req.body.gender;
  const major = req.body.major;
  const birth = req.body.birth;
  const phone = req.body.phone;
  const club_id = req.body.club_id;

  //Step2: article 테이블에 등록할 json데이터 생성하기
  //주의,중요: 반드시 json 데이터 속성명은 article.js 모델의 속성명과 일치해야한다.
  const students = {
    StudentID: student_id,
    Name: name,
    Gender: gender,
    Major: major,
    Year: moment(birth).format("YYYY-MM-DD"), // birth를 YYYY-MM-DD 형식으로 변환
    Phonenumber: phone,
    Dno: club_id,
  };

  //Step3: 준비된 신규 게시글 데이터를 article테이블에 저장한다.
  //create()메소드는 ORM Framework의 해 INSERT INTO article() values() 쿼리로 변환되어
  //DB서버에 전송되어 DB서버에서 실행되고 실제 저장된 단일게시글 DATA를 DB서버에서 반환한다.
  try {
    const registedStudents = await db.Students.create(students);
    console.log(
      "실제 DB Students 테이블에 저장된 데이터확인:",
      registedStudents
    );
    res.redirect("/article/list"); // 게시글 목록 페이지로 리디렉션
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//기존 단일 게시글 수정처리 요청과 응답처리 라우팅메소드
//호출주소: http://localhost:3000/article/modify
router.post("/modify", async (req, res) => {
  //STEP1: 사용자 수정한 데이터를 추출한다.
  //게시글 고유번호 추출하기
  const studentsIdx = req.body.student_id; //html Hidden tag에서 추출한다.

  const name = req.body.name;
  const student_id = req.body.student_id;
  const gender = req.body.gender;
  const major = req.body.major;
  const birth = req.body.birth;
  const phone = req.body.phone;
  const club_id = req.body.club_id;

  //Step2: article 테이블에 등록할 json데이터 생성하기
  const students = {
    StudentID: student_id,
    Name: name,
    Gender: gender,
    Major: major,
    Year: moment(birth).format("YYYY-MM-DD"), // birth를 YYYY-MM-DD 형식으로 변환
    Phonenumber: phone,
    Dno: club_id,
  };

  //수정된 데이터 건수 결과값으로 전달됩니다.
  const updatedCnt = await db.Students.update(students, {
    where: { StudentID: studentsIdx }, // 올바른 열 이름 사용
  });

  //기존 게시글 db수정처리후
  //목록 페이지로 이동
  res.redirect("/article/list");
});

//기존 단일 게시글 삭제처리 요청과 응답처리 라우팅메소드
//호출주소: http://localhost:3000/article/delete
router.get("/delete", async (req, res) => {
  const studentId = req.query.id;

  try {
    await db.Students.destroy({
      where: { StudentID: studentId },
    });
    res.redirect("/article/list"); // 목록 페이지로 리디렉션
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

//기존 단일게시글 정보 조회 확인 웹페이지 요청과 응답처리 라우팅메소드
//http://localhost:3000/article/modify/1
router.get("/modify/:id", async (req, res) => {
  const studentId = req.params.id;

  try {
    const student = await db.Students.findOne({
      where: { StudentID: studentId },
    });
    if (student) {
      res.render("article/modify.ejs", { student, moment }); // moment를 템플릿에 전달
    } else {
      res.status(404).send("Student not found");
    }
  } catch (error) {
    console.error(error);
    res.status(500).send("Internal Server Error");
  }
});

module.exports = router;
