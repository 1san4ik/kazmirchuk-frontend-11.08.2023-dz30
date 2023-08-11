const inp1 = document.createElement('input')
inp1.style.width = '500px'
document.body.appendChild(inp1)

const but1 = document.createElement('button')
but1.innerHTML = 'Перевірити посилання і перейти'
document.body.appendChild(but1)

function audit() {
    const a = inp1.value
    if (a.includes('http://') || a.includes('https://')) {
        window.location.href = a
    } else {
        const b = `https://${a}`
        window.location.href = b
    }
}

but1.addEventListener('click', audit)
