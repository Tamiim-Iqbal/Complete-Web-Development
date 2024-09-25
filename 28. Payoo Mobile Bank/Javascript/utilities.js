function getElementById(id)
{
    const value = document.getElementById(id);
    return value;
}

function getValue(id)
{
    const value = document.getElementById(id).value;
    return value;
}

function getValueParseFloat(id)
{
    const value = document.getElementById(id).value;
    return parseFloat(value);
}

function getInnerTextParseFloat(id)
{
    let value = document.getElementById(id).innerText;
    value = value.replace(/[^\d.-]/g, '');
    return parseFloat(value);
}

