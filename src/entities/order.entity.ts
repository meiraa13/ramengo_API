import {Entity, Column, ManyToOne, BeforeInsert, PrimaryColumn} from 'typeorm'
import Broth from './broth.entity'
import Protein from './protein.entity'


@Entity('orders')
class Order {
    @PrimaryColumn({type:'varchar'})
    id:string

    @Column({type: 'varchar'})
    description:string

    @Column({type:'varchar'})
    image:string

    @ManyToOne(()=>Broth)
    broth:Broth

    @ManyToOne(()=> Protein)
    protein:Protein

    @BeforeInsert()
    async setId(){
        try {
            const request = await fetch('https://api.tech.redventures.com.br/orders/generate-id',{
                method:'POST',
                headers:{
                    "x-api-key": "ZtVdh8XQ2U8pWI2gmZ7f796Vh8GllXoN7mr0djNf"
    
                }
            })
            const response = await request.json()
            this.id = response.orderId
            
        } catch (error) {
            console.log(error)
        }
    }


   
   
}

export default Order