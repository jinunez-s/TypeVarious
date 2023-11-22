// depth first values

const depthFirstValues = (root) => {
    if(root === null ) return [];
    const result = []
    const stack = [root] // [null]
    while (stack.length > 0 ){
        const current = stack.pop();
        result.push(current.val);

        if(current.right) stack.push(current.right)
        if(current.left) stack.push(current.left)
    }
return result
}
// depth first value
//recursive
const depthFirstValuesR = (root) =>{
    if (root === null) return [];
    const leftValues = depthFirstValuesR(root.left);
    const rightValues = depthFirstValuesR(root.right);
    return [root.val, ...leftValues, ...rightValues]
}

//breadthFristValue
const breadthFristValue = (root) =>{
    if (root === null) return [];

    const values = [];
    const queue = [root];

    while (queue.length > 0){
        const current = queue.shift();
        values.push(current.val)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return values;
}