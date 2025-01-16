import { cn } from '@/lib/utils' //utility function helping with dynamic classes 

const ProductPrice = ({value, classname}) => {

    //ensure 2 decimal places
    const stringValue = value.toFixed(2)
    // get the int/float 
    const [intValue, floatValue] = stringValue.split(".")
     
    return ( <p className={cn('text-2xl', classname)}>
        <span className='text-xs align-super'>$</span>
        {intValue}
        <span className='text-xs align-super'>.{floatValue}</span>
    </p>);
}
 
export default ProductPrice;