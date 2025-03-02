import { ObjectId } from 'mongodb';

export interface Note {
  _id?: ObjectId;
  title: string;
  content: string;
  description?: string;
  tag: string;
  fileId?: ObjectId | null;
  createdAt: Date;
  updatedAt?: Date;
}

export interface Notification {
  _id?: ObjectId;
  userId: ObjectId;
  message: string;
  read: boolean;
  createdAt: Date;
}