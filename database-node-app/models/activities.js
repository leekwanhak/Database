module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Activities",
    {
      ActivityID: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: false, // NOT NULL
        primaryKey: true, // PRIMARY KEY
      },
      ActivityName: {
        type: DataTypes.STRING(100), // MySQL의 varchar(100)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      Location: {
        type: DataTypes.STRING(100), // MySQL의 varchar(100)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      Date: {
        type: DataTypes.DATEONLY, // MySQL의 date와 매핑
        allowNull: true, // DEFAULT NULL
      },
      Dnumber: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: true, // DEFAULT NULL
      },
    },
    {
      // 추가 옵션
      tableName: "Activities", // 테이블 이름 명시적으로 설정 (대소문자 구분)
      timestamps: false, // createdAt, updatedAt 컬럼 자동 생성하지 않음
      charset: "utf8", // MySQL의 CHARSET 설정과 매핑
      collate: "utf8_general_ci", // MySQL의 DEFAULT CHARSET 설정과 매핑
    }
  );
};
