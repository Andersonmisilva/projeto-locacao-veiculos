import { UUID } from 'crypto';
import { Entity, Column } from 'typeorm';
import { v4 as uuid } from 'uuid';

@Entity('vehicles')
export default class VehiclesEntity {
  id: UUID;
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
