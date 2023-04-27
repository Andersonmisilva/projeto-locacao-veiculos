import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('vehicles')
class Venicles {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column('decimal')
  price: number;

  @Column('timestamp with time zone')
  mileage: Date;

  @Column('timestamp with time zone')
  created_at: Date;

  @Column('timestamp with time zone')
  updated_at: Date;
}

export default Venicles;
