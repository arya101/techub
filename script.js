let dateObj = new Date('04/30/'+ new Date().getFullYear());

document.addEventListener('DOMContentLoaded', applyJS);

function applyJS()
{
  document.getElementById("add").addEventListener('click', addClick);
  document.getElementById("remove").addEventListener('click', addRemove);
  document.getElementById("update").addEventListener('click', addUpdate);
}

function addRemove()
{
  caption_tr = document.getElementById('caption_tr');

  if (caption_tr.children.length > 2)
  {
    caption_tr.children[caption_tr.children.length - 1].remove();

    let table = document.getElementById('table');

    let children = table.children[0].children;

    // i = 1  becouse 0 is caption_tr.

    for(let i = 1; i < children.length; i++)
    {
       // Removing TD for other TR except caption_tr.

      children[i].children[children[i].children.length - 1].remove();
    }

    if (dateObj.getDay() != 6)
    {
      dateObj.setDate(dateObj.getDate() - 2);
    }
    else
    {
      dateObj.setDate(dateObj.getDate() - 1);
    }

    let count = parseInt(totalDays.childNodes[0].nodeValue);
    count--;
    totalDays.childNodes[0].nodeValue = count;

    updateList();
  }
}

function addUpdate()
{
  let table = document.getElementById('table');
  let children = table.children[0].children;

  for(let i = 1; i < children.length; i++)
  {
    let cur_child = children[i];

    let avg_counter = cur_child.children[1];
    let avg_mark = 0;

    if (cur_child.children.length == 2)
    {
      avg_mark = 0;
    }
    else
    {
      for(let y = 2; y < cur_child.children.length; y++)
      {
        avg_mark += parseInt(cur_child.children[y].childNodes[0].nodeValue);
      }

      avg_mark /= (cur_child.children.length - 2);
    }

    avg_counter.children[0].childNodes[0].nodeValue = avg_mark.toFixed(1);
  }

  updateList();
}

function addClick()
{
  let td = document.createElement("td");

  td.className = "avg";
  td.appendChild(document.createTextNode(dateObj.toDateString()));

  document.getElementById('caption_tr').appendChild(td);

  let table = document.getElementById('table');

  let children = table.children[0].children;

  // i = 1  becouse 0 is caption_tr.

  for(let i = 1; i < children.length; i++)
  {
     // Creating TD for other TR except caption_tr.

    td = document.createElement("td");
    td.className = "avg red";
    td.appendChild(document.createTextNode('0'));
    td.addEventListener('click', markTDClick);

    children[i].appendChild(td);
  }

  if (dateObj.getDay() != 5)
  {
    dateObj.setDate(dateObj.getDate() + 2);
  }
  else
  {
    dateObj.setDate(dateObj.getDate() + 1);
  }

  let totalDays = document.getElementById('totalDays');

  let count = parseInt(totalDays.childNodes[0].nodeValue);
  count++;
  totalDays.childNodes[0].nodeValue = count;

  updateList();
}

function markTDClick()
{
  let mark = parseInt(prompt("Please edit mark"));

  if (isNaN(mark))
  {
    mark = 0;
  }

  if (mark > 5)
  {
    mark = 5;
  }

  if (mark < 0)
  {
    mark = 0;
  }

  if (mark == 0)
  {
    this.classList.add('red');
  }
  else
  {
    this.classList.remove('red');
  }

  this.childNodes[0].nodeValue = mark;

  addUpdate();
}

function updateList()
{
  let table = document.getElementById('table');
  let children = table.children[0].children;

  let total_avg_mark = 0;
  let totalMissed = 0;

  for(let i = 1; i < children.length; i++)
  {
    let cur_child = children[i];
    let avg_mark = 0;

    if (cur_child.children.length == 2)
    {
      avg_mark = 0;
    }
    else
    {
      for(let y = 2; y < cur_child.children.length; y++)
      {
      	if (y % 2 == 1)
      	{
      		console.log(cur_child.children[y].classList);
      		cur_child.children[y].classList.add("yellow");
      	}

        cur_mark = parseInt(cur_child.children[y].childNodes[0].nodeValue);
        avg_mark += cur_mark;

        if (cur_mark == 0)
        {
          totalMissed++;
        }
      }

      avg_mark /= (cur_child.children.length - 2);
    }

    total_avg_mark += avg_mark;
  }

  let totalNumer = parseInt(document.getElementById('totalStudents').childNodes[0].nodeValue);

  document.getElementById('avgMark').childNodes[0].nodeValue = (total_avg_mark/totalNumer).toFixed(2);
  document.getElementById('missedLessons').childNodes[0].nodeValue = totalMissed;
}