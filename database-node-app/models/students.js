module.exports = (sequelize, DataTypes) => {
  const Students = sequelize.define(
    "Students",
    {
      StudentID: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: false, // NOT NULL
        primaryKey: true, // PRIMARY KEY
      },
      Name: {
        type: DataTypes.STRING(100), // MySQL의 varchar(100)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      Gender: {
        type: DataTypes.CHAR(1), // MySQL의 char(1)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      Major: {
        type: DataTypes.STRING(100), // MySQL의 varchar(100)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      Year: {
        type: DataTypes.DATE, // MySQL의 DATE와 매핑
        allowNull: true, // DEFAULT NULL
      },
      Phonenumber: {
        type: DataTypes.STRING(15), // MySQL의 varchar(15)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      Dno: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: true, // DEFAULT NULL
      },
    },
    {
      // 추가 옵션
      tableName: "Students", // 테이블 이름 명시적으로 설정
      timestamps: false, // createdAt, updatedAt 컬럼 자동 생성하지 않음
      charset: "utf8", // MySQL의 CHARSET 설정
      collate: "utf8_general_ci", // MySQL의 COLLATION 설정
    }
  );

  return Students;
};
