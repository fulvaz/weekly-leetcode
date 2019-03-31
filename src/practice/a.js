const a = {
    name: '123',
    children: [
        {
            name: '123',
            children: [
                {
                    name: '123',
                    children: [
                        
                    ]
                },
                {
                    name: '123',
                    children: [
                        
                    ]
                },
            ]
        },
        {
            name: '123',
            children: [
                
            ]
        }
    ]
}

function solve(a) {
    const empty = {}

    empty.tag = a.name;
    if (a.children.length) {
        empty.c = a.children.map(e => {
            return solve(e);
        })
    }
    return empty;
}

console.dir(solve(a));