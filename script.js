function generateLink() {
    const icons = document.getElementById('icons').value.trim().replace(/\s+/g, '');
    const theme = document.getElementById('theme').value;
    const perline = document.getElementById('perline').value;
    const alignment = document.getElementById('alignment').value;

    let url = `https://skillicons.dev/icons?i=${icons}`;
    if (theme) {
        url += `&theme=${theme}`;
    }
    if (perline) {
        url += `&perline=${perline}`;
    }

    const link = `<a href="https://skillicons.dev"><img src="${url}" /></a>`;
    const centeredLink = `<p align="center">${link}</p>`;

    const resultLink = alignment === 'center' ? centeredLink : link;

    document.getElementById('resultLink').value = resultLink;
    document.getElementById('preview').innerHTML = resultLink;
}
