using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using AquatirWebApp.Db;
using AquatirWebApp.Models;

namespace AquatirWebApp.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class GooController : ControllerBase
    {
        private readonly AquatirContext _context;

        public GooController(AquatirContext context)
        {
            _context = context;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Goo>>> GetGoos()
        {
            return await _context.Goos.ToListAsync();
        }

        // GET: api/Goo/5
        [HttpGet("{id}")]
        public async Task<ActionResult<Goo>> GetGoo(int id)
        {
            var goo = await _context.Goos.FindAsync(id);

            if (goo == null)
            {
                return NotFound();
            }

            return goo;
        }

        // PUT: api/Goo/5
        // To protect from overposting attacks, enable the specific properties you want to bind to, for
        // more details, see https://go.microsoft.com/fwlink/?linkid=2123754.
        [HttpPut("{id}")]
        public async Task<IActionResult> PutGoo(int id, Goo goo)
        {
            if (id != goo.uGoo)
            {
                return BadRequest();
            }

            _context.Entry(goo).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!GooExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        [HttpPost]
        public async Task<ActionResult<Goo>> PostGoo(Goo goo)
        {
            _context.Goos.Add(goo);
            await _context.SaveChangesAsync();

            return CreatedAtAction("GetGoo", new { id = goo.uGoo }, goo);
        }

        // DELETE: api/Goo/5
        [HttpDelete("{id}")]
        public async Task<ActionResult<Goo>> DeleteGoo(int id)
        {
            var goo = await _context.Goos.FindAsync(id);
            if (goo == null)
            {
                return NotFound();
            }

            _context.Goos.Remove(goo);
            await _context.SaveChangesAsync();

            return goo;
        }

        private bool GooExists(int id)
        {
            return _context.Goos.Any(e => e.uGoo == id);
        }
    }
}
