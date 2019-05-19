using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace ItalySettlers.Models
{
    public class User
    {
        [Key]
        public int UserID { get; set; }

        [Column(TypeName = "nvarchar(30)")]
        [Required(ErrorMessage = "This field is required.")]
        public string Username { get; set; }

        [DataType(DataType.EmailAddress)]
        [Column(TypeName = "varchar(30)")]
        public string Email { get; set; }

        [Column(TypeName = "varchar(40)")]
        public string Password { get; set; }

        [Column(TypeName = "varchar(10)")]
        [DisplayName("Date of Birth")]
        public DateTime DateOfBirth { get; set; }
    }
}
