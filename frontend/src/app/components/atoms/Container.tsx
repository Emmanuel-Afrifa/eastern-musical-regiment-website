
const Container = ({children}: {children: React.ReactNode}) => {
    return (
        <div className='w-full max-w-360 mx-auto'>
            {children}
        </div>
    )
}

export default Container