module.exports = (sequelize, DataTypes) => {
  const WorksOn = sequelize.define(
    "WorksOn",
    {
      StudentID: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: false, // NOT NULL
        primaryKey: true, // 복합 기본 키의 일부
      },
      ProjectID: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: false, // NOT NULL
        primaryKey: true, // 복합 기본 키의 일부
      },
      Hours: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: true, // DEFAULT NULL
      },
      ActivityID: {
        type: DataTypes.INTEGER, // MySQL의 int(11)과 매핑
        allowNull: true, // DEFAULT NULL
      },
    },
    {
      // 추가 옵션
      tableName: "WorksOn", // 테이블 이름 명시적으로 설정
      timestamps: false, // createdAt, updatedAt 컬럼 자동 생성하지 않음
      charset: "utf8", // MySQL의 CHARSET 설정
      collate: "utf8_general_ci", // MySQL의 COLLATION 설정
    }
  );

  return WorksOn;
};
