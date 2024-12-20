module.exports = (sequelize, DataTypes) => {
  return sequelize.define(
    "Projects",
    {
      ProjectID: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: false, // NOT NULL
        primaryKey: true, // PRIMARY KEY
      },
      ProjectName: {
        type: DataTypes.STRING(100), // MySQL의 varchar(100)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      StartDate: {
        type: DataTypes.DATEONLY, // MySQL의 date와 매핑
        allowNull: true, // DEFAULT NULL
      },
      EndDate: {
        type: DataTypes.DATEONLY, // MySQL의 date와 매핑
        allowNull: true, // DEFAULT NULL
      },
      ParticipantCount: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      Dnumber: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: true, // DEFAULT NULL
      },
    },
    {
      // 추가 옵션
      tableName: "Projects", // 테이블 이름 명시적으로 설정
      timestamps: false, // createdAt, updatedAt 컬럼 자동 생성하지 않음
      charset: "utf8", // MySQL의 CHARSET 설정
      collate: "utf8_general_ci", // MySQL의 COLLATION 설정
    }
  );
};
