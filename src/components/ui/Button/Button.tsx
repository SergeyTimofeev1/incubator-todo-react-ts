
type PropsChildrenType ={
    children: string
}

const Button = ({children}: PropsChildrenType) => (
    <button className='Button'>{children}</button>
);

export default Button
