function runButton() {
    var template_code_txt = $('#template_code_txt').val();
    var replace_var = $('#replace_var').val();
    var values_txt = $('#values_txt').val();
    var values_array = values_txt.split(',');

    var final_code = '';

    for (var i = 0; i < values_array.length; i++) {
        var val = values_array[i];

        var code_line = template_code_txt.replace(replace_var, val);
        final_code += code_line + '\n';
    }

    var cpytxt = $('<textarea id="cpytxt" rows="15" cols="80" />');
    $('body').append(cpytxt);
    $('#cpytxt').val(final_code);
    $('#cpytxt').select();
    document.execCommand("Copy");
    $('#cpytxt').remove();

    alert('Coped to clipboard!');
}

function clearButton() {
    $('#template_code_txt').val('');
    $('#replace_var').val('');
    $('#values_txt').val('');
}