"use strict";

module.exports = {
	up: async (queryInterface, Sequelize) => {
		await queryInterface.createTable("events", {
			id_event: {
				type: Sequelize.DataTypes.INTEGER,
				primaryKey: true,
				actoIncrement: true,
				allowNull: false,
			},
			title: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			image: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			schedule: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
			content: {
				type: Sequelize.DataTypes.STRING,
				allowNull: false,
			},
			createdAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
			updatedAt: {
				type: Sequelize.DataTypes.DATE,
				allowNull: false,
			},
		});
	},

	down: async (queryInterface, Sequelize) => {
		await queryInterface.dropTable("events");
	},
};
