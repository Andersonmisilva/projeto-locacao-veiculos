import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity('vehicles')
class Venicle {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  brand: string;

  @Column()
  model: string;

  @Column()
  year: number;

  @Column('decimal', { precision: 10, scale: 2 })
  price: number;

  @Column('timestamp with time zone', { precision: 10, scale: 5 })
  mileage: Date;

  @Column('timestamp with time zone')
  created_at: Date;

  @Column('timestamp with time zone')
  updated_at: Date;
}

export default Venicle;
