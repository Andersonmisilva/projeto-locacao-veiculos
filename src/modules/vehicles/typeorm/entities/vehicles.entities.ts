import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { uuid } from 'uuidv4';

@Entity('vehicles')
export default class VehiclesEntity {
  id: uuidv4;
  brand: string;
  model: string;
  plate: string;
  year: number;
  price: number;
  mileage: number;

  @Column({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}
