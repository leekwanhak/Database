module.exports = (sequelize, DataTypes) => {
  const Clubs = sequelize.define(
    "Clubs",
    {
      ClubID: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
      },
      ClubName: {
        type: DataTypes.STRING(100),
        allowNull: true,
      },
      Manager_SSN: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      ClubRoom: {
        type: DataTypes.STRING(50),
        allowNull: true,
      },
      Student_SSN: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      JoinDate: {
        type: DataTypes.DATEONLY,
        allowNull: true,
      },
      Professor_SSN: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
    },
    {
      tableName: "Clubs",
      timestamps: false,
      charset: "utf8",
      collate: "utf8_general_ci",
    }
  );

  // 관계 설정 (Association)
  Clubs.associate = (models) => {
    Clubs.belongsTo(models.Students, {
      foreignKey: "Student_SSN",
      targetKey: "StudentID",
      as: "Student",
    });

    Clubs.belongsTo(models.Professors, {
      foreignKey: "Professor_SSN",
      targetKey: "ProfessorID",
      as: "Professor",
    });
  };

  return Clubs;
};
