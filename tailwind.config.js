tailwind.config = {
    theme: {
        extend: {
            animation: {
                spin_slow: 'spin 6s linear infinite'
            },
            colors: {
                lightHover: '#fff1f2',
                darkHover: '#2a004a',
                darkTheme: '#11001f'
            },
            boxShadow: {
                black: '4px 4px 0 #000',
                white: '4px 4px 0 #fff'
            }
        }
    },
    darkMode: 'selector'
}