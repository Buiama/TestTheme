
var editor_cpp = ace.edit("code_cpp");
var editor_csharp = ace.edit("code_csharp");
var editor_python = ace.edit("code_python");
var editor_java = ace.edit("code_java");

edit(editor_cpp, "c_cpp","textmate");
edit(editor_csharp, "csharp","textmate");
edit(editor_python, "python","textmate");
edit(editor_java, "java","textmate");

function edit(editor, language, theme) {
	//alert('edided');
	editor.setTheme("ace/theme/"+theme);//twilight
	editor.getSession().setMode("ace/mode/"+language);
	editor.setShowPrintMargin(false);
	editor.setOptions({
	  maxLines: Infinity,
	  fontSize:"12pt",
	});
	editor.$blockScrolling=Infinity;
}


// var editor = ace.edit("code_cpp"); //редактор коду
// editor.setTheme("ace/theme/textmate");//twilight
// editor.getSession().setMode("ace/mode/c_cpp");
// editor.setShowPrintMargin(false);
// editor.setOptions({
//   maxLines: Infinity,
//   fontSize:"12pt",
// });
// editor.$blockScrolling=Infinity;

// var editor1 = ace.edit("code_csharp"); //редактор коду
// editor1.setTheme("ace/theme/textmate");//twilight
// editor1.getSession().setMode("ace/mode/csharp");
// editor1.setShowPrintMargin(false);
// editor1.setOptions({
//   maxLines: Infinity,
//   fontSize:"12pt",
// });
// editor1.$blockScrolling=Infinity;

// var editor2 = ace.edit("code_python"); //редактор коду
// editor2.setTheme("ace/theme/textmate");//twilight
// editor2.getSession().setMode("ace/mode/python");
// editor2.setShowPrintMargin(false);
// editor2.setOptions({
//   maxLines: Infinity,
//   fontSize:"12pt",
// });
// editor2.$blockScrolling=Infinity;

// var editor3 = ace.edit("code_java"); //редактор коду
// editor3.setTheme("ace/theme/textmate");//twilight
// editor3.getSession().setMode("ace/mode/java");
// editor3.setShowPrintMargin(false);
// editor3.setOptions({
//   maxLines: Infinity,
//   fontSize:"12pt",
// });
// editor3.$blockScrolling=Infinity;