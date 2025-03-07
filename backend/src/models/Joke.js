// models/Joke.ts
import { DataTypes } from 'sequelize';
import sequelize from '../config/database';

const Joke = sequelize.define('Joke', {
  id: { type: DataTypes.UUID, primaryKey: true, defaultValue: DataTypes.UUIDV4 },
  content: { type: DataTypes.STRING, allowNull: false },
  authorId: { type: DataTypes.UUID, allowNull: false },
}, { timestamps: true });

export default Joke;
