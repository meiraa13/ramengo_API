import {Entity, PrimaryGeneratedColumn, Column, OneToMany} from 'typeorm'
import Order from './order.entity'


@Entity('broths')
class Broth {
    @PrimaryGeneratedColumn('increment')
    id:string

    @Column({type: 'varchar'})
    imageInactive:string

    @Column({type:'varchar'})
    imageActive:string

    @Column({type:'varchar', unique:true})
    name:string

    @Column({type:'varchar'})
    description: string 

    @Column({type:'int'})
    price: number

    @OneToMany(() => Order, (order)=> order.broth )
    orders:Order[]

   
}

export default Broth