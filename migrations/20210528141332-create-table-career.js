"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("career", {
			id_career: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				actoIncrement: true,
				allowNull: true,
			},
			title: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			qualification: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			description: {
				type: Sequelize.DataTypes.TEXT,
				allowNull: false,
			},
			duedate: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: true,
			},
			updatedAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: true,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("career");
	},
};
