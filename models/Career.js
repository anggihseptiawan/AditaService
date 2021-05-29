module.exports = (sequelize, DataTypes) => {
	const Career = sequelize.define(
		"Career",
		{
			id_career: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true,
				allowNull: true,
			},
			title: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			qualification: {
				type: DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: DataTypes.TEXT,
				allowNull: false,
			},
			duedate: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: false,
			},
		},
		{
			tableName: "career",
			timestamps: true,
		}
	);

	return Career;
};
