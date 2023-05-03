import { UUID } from 'crypto';
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('vehicles')
export default class VehiclesEntity {
  @PrimaryGeneratedColumn()
  id: UUID;

  @Column()
  brand: string;
  @Column({ nullable: false, default: '' })
  model: string;
  @Column({ name: 'plate' })
  plate: string;
  @Column({ nullable: false, default: '' })
  year: number;
  @Column({ nullable: false, default: '' })
  price: number;
  @Column({ nullable: false, default: '' })
  mileage: number;

  @Column({ name: 'created_at', type: 'timestamptz' })
  created_at: Date;

  @Column({ name: 'updated_at', type: 'timestamptz' })
  updated_at: Date;
}
