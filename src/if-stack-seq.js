const arr1 = [];
const arr2 = [];

function IsPopOrder(pushV, popV)
{
    if (!popV || popV.length === 0) return false;
    if (!pushV || popV.length === 0) return false;
    // write code here
    
    
    // 1. 先从栈顶找
    
    while (popV.length) {
        const valueToSearch = popV.pop();
        
        let valueFind = arr1[arr1.length - 1];
        while (valueFind !== valueToSearch && pushV.length) {
            arr1.push(pushV.shift());
            valueFind = arr1[arr1.length - 1];
        }
        
        if (valueFind !== valueToSearch && !pushV.length) {
            return false;
        }
        
        if (valueFind === valueToSearch) {
            arr1.pop();
        }
    }
    return true;
    
    // 2. 没找到就从pushV中找, 边找边推到arr1
    
    // 3. 如果pushV空了还没找到, 返回false
    
    // 如果popV空了, 返回true
    
}

const a = IsPopOrder([1,2,3,4,5],[4,5,3,2,1]);
console.log(a);