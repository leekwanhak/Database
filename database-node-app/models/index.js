const path = require("path");
const Sequelize = require("sequelize");

//개발모드 환경설정
const env = process.env.NODE_ENV || "development";

//DB연결 환경설정정보 변경처리//관련정보 수정
const config = require(path.join(__dirname, "..", "config", "config.json"))[
  env
];

//데이터 베이스 객체
//빈 DB
const db = {};

//DB연결정보로 시퀄라이즈 ORM 객체 생성

//실제 DB 서버 연결해서 Table 제어 등 기능 제공---------------------------------------
const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

//DB 처리 객체에 시퀄라이즈 정보 맵핑처리
//이후 DB객체를 통해 데이터 관리가능해짐

//소문자 대문자 sequelize 속성을 객체에 추가--------------------------------------------
db.sequelize = sequelize; //DB연결정보를 포함한 DB제어 객체속성(CRUD)
db.Sequelize = Sequelize; //Sequelize팩키지에서 제공하는 각종 데이터 타입 및 관련 객체정보를 제공함

//회원모델 모듈파일 참조하고 db속성정의하기
db.Activities = require("./activities.js")(sequelize, Sequelize);
db.Clubs = require("./clubs.js")(sequelize, Sequelize);
db.Professors = require("./professors.js")(sequelize, Sequelize);
db.Projects = require("./projects.js")(sequelize, Sequelize);
db.Students = require("./students.js")(sequelize, Sequelize);
db.Workson = require("./workson.js")(sequelize, Sequelize);

// 각 모델의 associate 메서드 호출
Object.keys(db).forEach((modelName) => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

//db객체 외부로 노출하기
module.exports = db;
