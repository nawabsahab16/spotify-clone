interface BoxProps {
    children: React.ReactNode;
    className?: string;

}

const Box: React.FC<BoxProps> = ({
    children,
    className
}) => {
    return(
         <div> 
            
         </div>
    )
    return ( 
        <div>
            {children}
        </div>
    );
}

export default Box;